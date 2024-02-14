//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

class MakeShow {
  constructor(showName, showGenre, showRelease, showEpisodes) {
    this.name = showName;
    this.genre = showGenre;
    this.release = showRelease;
    this.episodes = showEpisodes;
  }
  howManyMinutes() {
    console.log(
      `This show will cost you ${this.episodes * 60} minutes of your life`
    );
  }
  whatGenre() {
    console.log(`The genre for this show is ${this.genre}`);
  }
  whatsTheName() {
    console.log(`${this.name}`);
  }
}
