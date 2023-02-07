import { BehaviorSubject } from "rxjs";
import Environment from "../environment";

// import i18n from "i18n";

const currentUserSubject = new BehaviorSubject(null);

export const AuthService = {
  expirationTime: 60 * 5, // Seconds
  idleInterval: null,
  idleTime: 0,
  currentUser: currentUserSubject.asObservable(),

  currentUserValue: () => {
    return currentUserSubject.value;
  },

  login: (username, password) => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // "Accept-Language": i18n.language,
        "Accept-Language": "en",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ username, password }),
    };

    return fetch(`${Environment.api}token/`, requestOptions).then(
      (response) => {
        if (response.ok) {
          return response.json().then((data) => {
            localStorage.setItem("access", data.results.access);
            return data;
          });
        }
        throw response;
      }
    );
  },

  confirm: (userId, key) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: userId, key }),
    };

    return fetch(`${Environment.api}api/confirm_email/`, requestOptions).then(
      (response) => {
        if (response.ok) {
          return response.json().then((data) => {
            localStorage.setItem("access", data.access);
            localStorage.setItem("refresh", data.refresh);
            return data;
          });
        }
        throw response;
      }
    );
  },

  verify: async () => {
    const token = localStorage.getItem("access");
    if (token) {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: token }),
      };

      return fetch(`${Environment.api}api/token/verify/`, requestOptions).then(
        (response) => {
          if (response.ok) {
            return response.json();
          }
          AuthService.logout();
          throw response;
        }
      );
    }
  },

  refresh: async () => {
    const refresh = localStorage.getItem("refresh");
    if (refresh) {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refresh: refresh }),
      };
      const response = await fetch(
        `${Environment.api}api/token/refresh/`,
        requestOptions
      );
      if (response.status === 200) {
        const data = await response.json();
        localStorage.setItem("access", data.access);
      }
    }
  },

  logout: () => {
    // remove user from local storage to log user out
    localStorage.removeItem("currentUser");
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    currentUserSubject.next(null);
    AuthService.removeListeners();
  },

  loadUser: async (refresh = false) => {
    if (refresh) {
      await AuthService.refresh();
    }

    return new Promise((resolve, reject) => {
      const access = localStorage.getItem("access");
      if (!access) {
        // eslint-disable-next-line prefer-promise-reject-errors
        reject("No Access");
        return;
      }

      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + access,
        },
      };
      return fetch(`${Environment.api}me/`, requestOptions)
        .then((response) => {
          if (response.ok) {
            response.json().then((data) => {
              const user = data.results;
              localStorage.setItem("currentUser", JSON.stringify(user));

              currentUserSubject.next(user);
              AuthService.startListeners();
              resolve(user);
            });
          } else {
            AuthService.logout();
            reject(response);
          }
        })
        .catch((error) => {
          AuthService.logout();
          reject(error);
        });
    });
  },

  getToken() {
    return `Bearer ${localStorage.getItem("access")}`;
  },

  resetIdle: function () {
    const pendingDelta = AuthService.expirationTime - AuthService.idleTime;

    // If detects user activity and token is going to be expired refresh it
    if (/* pendingDelta > 0 && */ pendingDelta < 60) {
      AuthService.idleTime = 0;
      AuthService.refresh();
    }
  },

  timerIncrement: function () {
    AuthService.idleTime = AuthService.idleTime + 1;

    // Autologout when idleTime passes the expiration delta
    // if (AuthService.idleTime > AuthService.expirationTime) {
    //   AuthService.removeListeners();
    //   AuthService.logout();
    // }
  },

  removeListeners: () => {
    document.removeEventListener("keypress", AuthService.resetIdle, false);

    if (AuthService.idleInterval) clearInterval(AuthService.idleInterval);
  },

  startListeners: () => {
    AuthService.idleInterval = setInterval(AuthService.timerIncrement, 1000);
    document.addEventListener("mousemove", AuthService.resetIdle, false);
    document.addEventListener("keypress", AuthService.resetIdle, false);
  },
};
