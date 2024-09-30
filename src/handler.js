const { nanoid } = require("nanoid");
const books = require("./books");

const addBookHandler = (req, res) => {
	const {
		name,
		year,
		author,
		summary,
		publisher,
		pageCount,
		readPage,
		reading,
	} = req.body;

	if (!name) {
		return res.status(400).json({
			status: "fail",
			message: "Gagal menambahkan buku. Mohon isi nama buku",
		});
	}

	// Validate `readPage` must not be greater than `pageCount`
	if (readPage > pageCount) {
		return res.status(400).json({
			status: "fail",
			message:
				"Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount",
		});
	}

	const id = nanoid(16);
	const insertedAt = new Date().toISOString();
	const updatedAt = insertedAt;
	const finished = pageCount === readPage;

	const newBook = {
		id,
		name,
		year,
		author,
		summary,
		publisher,
		pageCount,
		readPage,
		finished,
		reading,
		insertedAt,
		updatedAt,
	};

	books.push(newBook);

	const isSuccess = books.some((book) => book.id === id);

	if (isSuccess) {
		return res.status(201).json({
			status: "success",
			message: "Buku berhasil ditambahkan",
			data: {
				bookId: id,
			},
		});
	}

	return res.status(500).json({
		status: "fail",
		message: "Buku gagal ditambahkan",
	});
};

const getAllBooksHandler = (req, res) => {
	const { reading, finished, name } = req.query;
	let filteredBooks = books;

	if (reading !== undefined) {
		const isReading = reading === "1";
		filteredBooks = filteredBooks.filter((book) => book.reading === isReading);
	}

	if (finished !== undefined) {
		const isFinished = finished === "1";
		filteredBooks = filteredBooks.filter((book) => book.finished === isFinished);
	}

	if (name) {
		filteredBooks = filteredBooks.filter((book) =>
			book.name.toLowerCase().includes(name.toLowerCase())
		);
	}

	return res.status(200).json({
		status: "success",
		data: {
			books: filteredBooks.map(({ id, name, publisher }) => ({
				id,
				name,
				publisher,
			})),
		},
	});
};

const getBookByIdHandler = (req, res) => {
	const { bookId } = req.params;

	const book = books.find((b) => b.id === bookId);

	if (book) {
		return res.status(200).json({
			status: "success",
			data: {
				book,
			},
		});
	}

	return res.status(404).json({
		status: "fail",
		message: "Buku tidak ditemukan",
	});
};

const editBookByIdHandler = (req, res) => {
	const { bookId } = req.params;
	const {
		name,
		year,
		author,
		summary,
		publisher,
		pageCount,
		readPage,
		reading,
	} = req.body; // Use req.body directly
	const updatedAt = new Date().toISOString();

	// Validate `name`
	if (!name) {
		return res.status(400).json({
			status: "fail",
			message: "Gagal memperbarui buku. Mohon isi nama buku",
		});
	}

	// Validate `readPage` must not be greater than `pageCount`
	if (readPage > pageCount) {
		return res.status(400).json({
			status: "fail",
			message:
				"Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount",
		});
	}

	const index = books.findIndex((book) => book.id === bookId);

	if (index !== -1) {
		books[index] = {
			...books[index],
			name,
			year,
			author,
			summary,
			publisher,
			pageCount,
			readPage,
			reading,
			updatedAt,
		};

		return res.status(200).json({
			status: "success",
			message: "Buku berhasil diperbarui",
		});
	}

	return res.status(404).json({
		status: "fail",
		message: "Gagal memperbarui buku. Id tidak ditemukan",
	});
};

const deleteBookByIdHandler = (req, res) => {
	const { bookId } = req.params;

	const index = books.findIndex((book) => book.id === bookId);

	if (index !== -1) {
		books.splice(index, 1);
		return res.status(200).json({
			status: "success",
			message: "Buku berhasil dihapus",
		});
	}

	return res.status(404).json({
		status: "fail",
		message: "Buku gagal dihapus. Id tidak ditemukan",
	});
};

module.exports = {
	addBookHandler,
	getAllBooksHandler,
	getBookByIdHandler,
	editBookByIdHandler,
	deleteBookByIdHandler,
};
