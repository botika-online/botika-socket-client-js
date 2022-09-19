import { io, ManagerOptions, Socket, SocketOptions } from 'socket.io-client';

export default class BotikaSocketClient {
	private auth: {
		[key: string]: any;
	} | ((cb: (data: object) => void) => void);

	private baseUrl: string;

	/**
	 * Constructor
	 *
	 * @param baseUrl
	 * @param auth
	 */
	public constructor(
		baseUrl: string,
		auth: {
			[key: string]: any;
		} | ((cb: (data: object) => void) => void)
	) {
		this.baseUrl = baseUrl;
		this.auth = auth;
	}

	/**
	 * Connect to socket
	 *
	 * @param name
	 * @returns Socket
	 */
	public channel(name: string, opts?: Partial<ManagerOptions & SocketOptions>): Socket {
		return io(`${this.baseUrl}/${name}`, Object.assign({}, opts, {
			auth: this.auth,
			transports: [ 'websocket' ],
			forceNew: false,
			multiplex: true,
		}));
	}
}
