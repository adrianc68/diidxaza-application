export const helpHttp = () => {
  const customFetch = (endpoint, options) => {
    const defaultHeader = {
      accept: "application/json",
    };

    const controller = new AbortController();
    options.signal = controller.signal;

    options.method = options.method || "GET";
    options.headers = options.headers
      ? { ...defaultHeader, ...options.headers }
      : defaultHeader;

    options.body = JSON.stringify(options.body) || false;
    if (!options.body) {
      delete options.body;
    }

    setTimeout(() => controller.abort(), 5000);

    return fetch(endpoint, options)
      .then((response) =>
        response.ok
          ? response.json()
          : Promise.reject({
              err: true,
              status: response.status || "00",
              statusText: response.statusText || "An error occurred",
            })
      )
      .catch((err) => err);
  };

  const get = (url, options = {}) => customFetch(url, options);

  const post = (url, options = {}) => {
    options.method = "POST";
    return customFetch(url, options);
  };

  const patch = (url, options = {}) => {
    options.method = "PATCH";
    return customFetch(url, options);
  };

  const put = (url, options = {}) => {
    options.method = "PUT";
    return customFetch(url, options);
  };

  const del = (url, options = {}) => {
    options.method = "DELETE";
    return customFetch(url, options);
  };

  return {
    get,
    post,
    put,
    del,
    patch,
  };
};

export const UrlAPI = "http://127.0.0.1:5000/";
