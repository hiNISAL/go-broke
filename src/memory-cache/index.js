class MemoryCache {
  cache = new Map();

  set(key, val) {
    this.cache.set(key, val);
  }

  get(key) {
    return this.cache.get(key);
  }
}

const memoryCache = new MemoryCache();

module.exports = memoryCache;
