class ExponentialBackoff {
  constructor(maxAttempts = 5, baseDelay = 1000, maxDelay = 30000) {
    this.maxAttempts = maxAttempts;
    this.baseDelay = baseDelay;
    this.maxDelay = maxDelay;
    this.currentAttempt = 0;
  }

  reset() {
    this.currentAttempt = 0;
  }

  async executeWithRetry(asyncFn) {
    this.currentAttempt++;

    try {
      const result = await asyncFn();
      this.reset();
      return result;
    } catch (error) {
      if (this.currentAttempt >= this.maxAttempts) {
        this.reset();
        throw error;
      }

      const delay = Math.min(
        this.baseDelay * Math.pow(2, this.currentAttempt - 1),
        this.maxDelay
      );

      console.log(`Reintentando en ${delay / 1000} segundos...`);
      await new Promise((resolve) => setTimeout(resolve, delay));
      return this.executeWithRetry(asyncFn);
    }
  }

  getNextDelay() {
    return Math.min(
      this.baseDelay * Math.pow(2, this.currentAttempt - 1),
      this.maxDelay
    );
  }
}

module.exports = {
  ExponentialBackoff,
};
