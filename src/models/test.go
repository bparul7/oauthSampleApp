const {createUser, readUser, updateUser, deleteUser} = require ('./crudOperations');

async function main() {

	await createUser ({
		name: "Parul Bansal",
		email: "bparul999@gmail.com"
	});

	await readUser ({
		email: "bparul999@gmail.com",
	})

	await updateUser ({
		email: "bparul999@gmail.com",
	}, {
		email: "bparul9999@gmail.com",
		name: "Parul",
	})

	await readUser ({
		email: "bparul9999@gmail.com",
	})

	await deleteUser ({
		email: "bparul9999@gmail.com",
	})

	await readUser ({
		email: "bparul9999@gmail.com",
	})

}

main();