export const METHODS = {
  GET: "GET",
  PUT: "PUT",
  POST: "POST",
  DELETE: "DELETE",
};

export function queryStringify(data: any) {
  if (!data) {
    return "";
  }

  let str = "?";
  let iteration = 0;

  for (const [key, value] of Object.entries(data)) {
    if (iteration === Object.keys(data).length - 1) {
      str = str.concat(key + "=" + (value as any).toString());
    } else {
      str = str.concat(key + "=" + (value as any).toString() + "&");
    }
    iteration++;
  }

  return str;
}

export class HTTPTransport {
  static get(url, options = {}) {
    return this.request(
      url,
      {
        ...options,
        data: queryStringify((options as any).data),
        method: METHODS.GET,
      },
      (options as any).timeout
    );
  }

  static put(url, options = {}) {
    return this.request(
      url,
      { ...options, method: METHODS.PUT },
      (options as any).timeout
    );
  }

  static post(url, options = {}) {
    return this.request(
      url,
      { ...options, method: METHODS.POST },
      (options as any).timeout
    );
  }

  static delete(url, options = {}) {
    return this.request(
      url,
      { ...options, method: METHODS.DELETE },
      (options as any).timeout
    );
  }

  static request(url, options, timeout = 5000) {
    return new Promise(function (resolve, reject) {
      const xhr = new XMLHttpRequest();
      if (options.method !== "GET") {
        xhr.open(options.method, url);
      } else {
        xhr.open(options.method, url + options.data);
      }

      xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(xhr);
        } else {
          reject({
            status: xhr.status,
            statusText: xhr.statusText,
          });
        }
      };

      xhr.onerror = function () {
        reject({
          status: xhr.status,
          statusText: xhr.statusText,
        });
      };

      if (options.headers) {
        Object.keys(options.headers).forEach(function (key) {
          xhr.setRequestHeader(key, options.headers[key]);
        });
      }

      xhr.timeout = timeout;

      if (options.method !== "GET") {
        xhr.send(JSON.stringify(options.data));
      } else {
        xhr.send();
      }
    });
  }
}
