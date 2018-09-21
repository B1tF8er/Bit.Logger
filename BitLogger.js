class bitLogger {
  constructor(config) {
    this.levels = {
      critical: {
        name: "critical",
        value: 1
      },
      error: {
        name: "error",
        value: 2
      },
      warning: {
        name: "warning",
        value: 3
      },
      information: {
        name: "information",
        value: 4
      },
      verbose: {
        name: "verbose",
        value: 5
      },
      debug: {
        name: "debug",
        value: 6
      }
    };

    this.config = config || {
      showDate: true,
      showTime: true,
      showLevel: true,
      level: this.levels.debug
    };

    this.whitespace = " ";
    this.empty = "";
  }

  getDateTime() {
    let currentDate = new Date();
    let dateTime = currentDate
      .toISOString()
      .replace(/([T|Z]+)/g, this.whitespace)
      .replace(/([.][0-9]{1,3})/, this.empty)
      .trim()
      .split(this.whitespace);

    if (this.config.showDate && this.config.showTime) {
      return dateTime.join(this.whitespace);
    } else if (this.config.showDate) {
      return dateTime[0];
    } else if (this.config.showTime) {
      return dateTime[1];
    }
  }

  write(level, message) {
    if (!level) {
      throw new TypeError("Level must be defined");
    }

    if (!message) {
      throw new TypeError("message must be defined");
    }

    if (typeof message !== "string") {
      message = JSON.stringify(message);
    }

    let shouldDisplayDateOrTime = this.config.showDate || this.config.showTime;
    let shouldShowLevel = this.config.showLevel;
    let displayDatetime = shouldDisplayDateOrTime
      ? `${this.getDateTime()} | `
      : this.empty;
    let displayLevel = shouldShowLevel ? `<${level.name}> - ` : this.empty;
    let writeMessage = this.config.level.value >= level.value;

    if (writeMessage)
      console.log(`${displayDatetime}${displayLevel}${message}`);
  }

  critical(message) {
    this.write(this.levels.critical, message);
  }

  error(message) {
    this.write(this.levels.error, message);
  }

  warning(message) {
    this.write(this.levels.warning, message);
  }

  information(message) {
    this.write(this.levels.information, message);
  }

  verbose(message) {
    this.write(this.levels.verbose, message);
  }

  debug(message) {
    this.write(this.levels.debug, message);
  }
}
