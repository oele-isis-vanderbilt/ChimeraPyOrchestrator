export enum Icons {
	refresh = 'refresh',
	add = 'add',
	remove = 'remove',
	magnify = 'magnify',
	reduce = 'reduce',
	default = 'default'
}

const IconsPath: { [key in Icons]: string } = {
	[Icons.refresh]:
		'M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z',
	[Icons.add]:
		'M12 4.75a.75.75 0 00-1.5 0v5.5H5.25a.75.75 0 000 1.5H10.5v5.5a.75.75 0 001.5 0v-5.5h5.5a.75.75 0 000-1.5h-5.5v-5.5z',
	[Icons.remove]: 'M4.75 12a.75.75 0 000 1.5h10.5a.75.75 0 000-1.5H4.75z',
	[Icons.magnify]:
		'M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5zm8.25-3.75a.75.75 0 01.75.75v2.25h2.25a.75.75 0 010 1.5h-2.25v2.25a.75.75 0 01-1.5 0v-2.25H7.5a.75.75 0 010-1.5h2.25V7.5a.75.75 0 01.75-.75z',
	[Icons.reduce]:
		'M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5zm4.5 0a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75z',
	[Icons.default]:
		'M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z'
};

export const getIconPath = (icon: Icons): string => {
	return IconsPath[icon] || IconsPath[Icons.default];
};
