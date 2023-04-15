class Api {
  private baseUrl: string = "https://suggestions.dadata.ru/suggestions/api";
  private headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: "Token " + import.meta.env.VITE_API_TOKEN,
  };
  private API_TOKEN: string = import.meta.env.VITE_API_TOKEN;

  public async get<T>(url: string): Promise<T> {}

  public async post<T>(url: string, data: object): Promise<T> {
    const response = await fetch(`${this.baseUrl}/${url}`, {
      method: "POST",
      headers: this.headers,
      mode: "cors",
      body: JSON.stringify(data),
    });
    return await response.json();
  }
}

export default new Api();
