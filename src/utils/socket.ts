export class Socket {
  private _socket: WebSocket | undefined;
  private _url: string;
  private _onMessage: ((event: MessageEvent) => void) | undefined;

  constructor(url: string) {
    this._url = url;
  }

  connect() {
    this._socket = new WebSocket(this._url);

    this._socket.onopen = (event: Event) => {
      console.info("Socket connected!");
    };

    this._socket.onclose = (event: CloseEvent) => {
      console.info("Socket closed!");
    };

    this._socket.onerror = (error: Event) => {
      console.info(`Socket error: ${error}`);
    };

    this._socket.onmessage = (event: MessageEvent) => {
      this._onMessage?.(event);
    };
  }

  onMessage(onMessageCallback: (event: MessageEvent) => void) {
    this._onMessage = onMessageCallback;
  }

  disconnect() {
    this._socket?.close();
  }
}
