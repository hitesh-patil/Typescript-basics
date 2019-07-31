export class Person {
  /**
   * @param username Given user name.
   */
  private username: string = 'person';
  /**
   * @method getName returns provided name
   */
  getName(name: string): string {
    return name;
  }

  getUserName() {
    return this.username;
  }
}

export class Developer extends Person {
/**
 * @param developerName Given developer name.
 */
  private developerName: string = 'Hitesh';
  /**
   * @method getName returns provided name
   */
  getName(name: string): string {
    return name;
  }

  getDeveloperName() {
    return this.developerName;
  }

  getParentName(name: string) {
    return super.getName(name);
  }
}
