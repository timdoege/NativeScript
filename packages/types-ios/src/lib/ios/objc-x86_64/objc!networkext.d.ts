
declare const enum ne_socket_attribution_t {

	NE_SOCKET_ATTRIBUTION_DEVELOPER = 1,

	NE_SOCKET_ATTRIBUTION_USER = 2
}

/**
 * @since 15.0
 */
declare function ne_socket_set_attribution(socket: number, attribution: ne_socket_attribution_t): number;

/**
 * @since 15.0
 */
declare function ne_socket_set_domains(socket: number, domain_names: interop.Pointer | interop.Reference<interop.Pointer | interop.Reference<any>>, domain_count: number): number;

/**
 * @since 15.0
 */
declare function ne_socket_set_website_attribution(socket: number, hostname: string | interop.Pointer | interop.Reference<any>): number;
