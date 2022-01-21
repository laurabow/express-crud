const products = [
	{
		_id: "5ee3e0e6f79c840004559e92",
		name: "Product 001",
		imgURL:
			"https://images.unsplash.com/photo-1573521193826-58c7dc2e13e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		price: "130",
		__v: 0,
		createdAt: "2020-06-12T20:09:10.084Z",
		updatedAt: "2020-06-12T20:09:10.084Z",
	},
	{
		_id: "5ee3e0e6f79c840004559e93",
		name: "Product 002",
		imgURL:
			"https://images.unsplash.com/photo-1576594496020-534bf2437b21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		price: "100",
		__v: 0,
		createdAt: "2020-06-12T20:09:10.086Z",
		updatedAt: "2020-06-12T20:09:10.086Z",
	},
	{
		_id: "5ee3e0e6f79c840004559e94",
		name: "Product 003",
		imgURL:
			"https://i.ibb.co/XkKm1pM/assorted-color-paint-brush-stroke-1672850.jpg",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		price: "140",
		__v: 0,
		createdAt: "2020-06-12T20:09:10.086Z",
		updatedAt: "2020-06-12T20:09:10.086Z",
	},
	{
		_id: "5ee3e0e6f79c840004559e95",
		name: "Product 004",
		imgURL:
			"https://images.unsplash.com/photo-1580380853934-834251ec0e95?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		price: "168",
		__v: 0,
		createdAt: "2020-06-12T20:09:10.086Z",
		updatedAt: "2020-06-12T20:09:10.086Z",
	},
	{
		_id: "5ee3e0e6f79c840004559e96",
		name: "Product 005",
		imgURL:
			"https://images.unsplash.com/photo-1531826338556-162edb086560?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		price: "110",
		__v: 0,
		createdAt: "2020-06-12T20:09:10.087Z",
		updatedAt: "2020-06-12T20:09:10.087Z",
	},
	{
		_id: "5ee3e0e6f79c840004559e97",
		name: "Product 006",
		imgURL:
			"https://i.ibb.co/bJrPBSQ/steve-johnson-n-WYz-Sj-Ac0e-E-unsplash-Cropped.jpg",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		price: "130",
		__v: 0,
		createdAt: "2020-06-12T20:09:10.087Z",
		updatedAt: "2020-06-12T20:09:10.087Z",
	},
	{
		_id: "5ee3e0e6f79c840004559e98",
		name: "Product 007",
		imgURL:
			"https://i.ibb.co/QnZWFXJ/blue-green-and-brown-abstract-painting-3582425.jpg",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		price: "130",
		__v: 0,
		createdAt: "2020-06-12T20:09:10.088Z",
		updatedAt: "2020-06-12T20:09:10.088Z",
	},
	{
		_id: "5ee3e0e6f79c840004559e99",
		name: "Product 008",
		imgURL:
			"https://images.unsplash.com/photo-1577915509669-e8daeb28b498?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		price: "128",
		__v: 0,
		createdAt: "2020-06-12T20:09:10.088Z",
		updatedAt: "2020-06-12T20:09:10.088Z",
	},
	{
		_id: "5ee3e0e6f79c840004559e9a",
		name: "Product 009",
		imgURL:
			"https://images.unsplash.com/photo-1575986711002-b1e7452c8b17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		price: "110",
		__v: 0,
		createdAt: "2020-06-12T20:09:10.088Z",
		updatedAt: "2020-06-12T20:09:10.088Z",
	},
	{
		_id: "5ee3e0e6f79c840004559e9b",
		name: "Product 010",
		imgURL: "https://i.ibb.co/jJntzzb/painting-wallpaper-1070527.jpg",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		price: "140",
		__v: 0,
		createdAt: "2020-06-12T20:09:10.089Z",
		updatedAt: "2020-06-12T20:09:10.089Z",
	},
	{
		_id: "5ee3e0e6f79c840004559e9c",
		name: "Product 011",
		imgURL:
			"https://i.ibb.co/qy7f9cb/orange-and-multicolored-abstract-painting-2784948.jpg",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		price: "128",
		__v: 0,
		createdAt: "2020-06-12T20:09:10.089Z",
		updatedAt: "2020-06-12T20:09:10.089Z",
	},
	{
		_id: "5ee3e0e6f79c840004559e9d",
		name: "Product 012",
		imgURL:
			"https://i.ibb.co/kh7C2M5/steve-johnson-RLy-Ez-Lmh-R98-unsplash-1-Cropped.jpg",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		price: "110",
		__v: 0,
		createdAt: "2020-06-12T20:09:10.089Z",
		updatedAt: "2020-06-12T20:09:10.089Z",
	},
	{
		_id: "5ee3e0e6f79c840004559e9e",
		name: "Product 013",
		imgURL:
			"https://i.ibb.co/NtkxmdN/blue-white-red-and-yellow-abstract-painting-1143758.jpg",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		price: "110",
		__v: 0,
		createdAt: "2020-06-12T20:09:10.090Z",
		updatedAt: "2020-06-12T20:09:10.090Z",
	},
	{
		_id: "5ee3e0e6f79c840004559e9f",
		name: "Product 014",
		imgURL: "https://i.ibb.co/zF1Y6LV/abstract-painting-1293125.jpg",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		price: "110",
		__v: 0,
		createdAt: "2020-06-12T20:09:10.090Z",
		updatedAt: "2020-06-12T20:09:10.090Z",
	},
	{
		_id: "5ee3e0e6f79c840004559ea0",
		name: "Product 015",
		imgURL:
			"https://i.ibb.co/TwkVCj5/steve-johnson-Ann-Q-TOu-Bxc-unsplash-Cropped.jpg",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		price: "90",
		__v: 0,
		createdAt: "2020-06-12T20:09:10.090Z",
		updatedAt: "2020-06-12T20:09:10.090Z",
	},
	{
		_id: "5ee3e0e6f79c840004559ea1",
		name: "Product 016",
		imgURL: "https://i.ibb.co/FWRsGJy/photo-of-abstract-painting-1451567.jpg",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		price: "140",
		__v: 0,
		createdAt: "2020-06-12T20:09:10.091Z",
		updatedAt: "2020-06-12T20:09:10.091Z",
	},
	{
		_id: "5ee3e0e6f79c840004559ea2",
		name: "Product 017",
		imgURL:
			"https://i.ibb.co/tbDwCmL/red-yellow-and-blue-abstract-painting-1286632.jpg",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		price: "170",
		__v: 0,
		createdAt: "2020-06-12T20:09:10.091Z",
		updatedAt: "2020-06-12T20:09:10.091Z",
	},
	{
		_id: "5ee3e0e6f79c840004559ea3",
		name: "Product 018",
		imgURL:
			"https://i.ibb.co/kmV31B1/yellow-and-red-abstract-painting-1789968.jpg",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		price: "110",
		__v: 0,
		createdAt: "2020-06-12T20:09:10.091Z",
		updatedAt: "2020-06-12T20:09:10.091Z",
	},
	{
		_id: "5ee3e0e6f79c840004559ea4",
		name: "Product 019",
		imgURL:
			"https://i.ibb.co/bvJpK6d/photo-of-abstract-painting-on-canvas-1812960.jpg",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		price: "80",
		__v: 0,
		createdAt: "2020-06-12T20:09:10.091Z",
		updatedAt: "2020-06-12T20:09:10.091Z",
	},
	{
		_id: "5ee3e0e6f79c840004559ea5",
		name: "Product 020",
		imgURL:
			"https://i.ibb.co/jf7fJkj/multicolored-abstract-painting-1570779.jpg",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		price: "180",
		__v: 0,
		createdAt: "2020-06-12T20:09:10.092Z",
		updatedAt: "2020-06-12T20:09:10.092Z",
	},
	{
		_id: "5ee3e0e6f79c840004559ea6",
		name: "Product 021",
		imgURL:
			"https://i.ibb.co/30GbHgf/blue-orange-and-white-abstract-painting-1183992.jpg",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		price: "70",
		__v: 0,
		createdAt: "2020-06-12T20:09:10.092Z",
		updatedAt: "2020-06-12T20:09:10.092Z",
	},
];

export default products;