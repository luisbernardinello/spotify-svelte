declare namespace App {
	interface PageData {
		user: SpotifyApi.CurrentUsersProfileResponse | null;
		title?: string;
		color?: string | null;
	}
}

declare interface Window {
	refreshPromise: Promise<Response> | null;
}
