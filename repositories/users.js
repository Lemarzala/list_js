class UsersRepository {
  constructor(filename) {
    if (!filename) {
      throw new Error("creating a repository requires a filename");
    }
  }
}

new UsersRepository();
