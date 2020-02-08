class gitHub {
  constructor() {
    this.client_ID = "21887d3d62515bdd75c7";
    this.client_Secret = "a86b47fd842842e2977bd01d7c16d2496068b742";
  }

  async getUsers(userName) {
    const res = await fetch(
      `https://api.github.com/users/${userName}?client_id=${this.client_ID}&client_secret=${this.client_Secret}`
    );
    const profile = await res.json();
    return {
      profile
    };
  }
}
