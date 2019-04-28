export interface ICacheStore<K, T> {
	/**
	 * Get all of the items in the cache.
	 */
	all(): Array<[K, T]>;

	/**
	 * Get the keys of the cache items.
	 */
	keys(): K[];

	/**
	 * Get the values of the cache items.
	 */
	values(): T[];

	/**
	 * Retrieve an item from the cache by key.
	 */
	get(key: K): T | undefined;

	/**
	 * Retrieve multiple items from the cache by key.
	 */
	getMany(keys: K[]): Array<T | undefined>;

	/**
	 * Store an item in the cache for a given number of seconds.
	 */
	put(key: K, value: T, seconds: number): boolean;

	/**
	 * Store multiple items in the cache for a given number of seconds.
	 */
	putMany(values: Array<[K, T]>, seconds: number): boolean[];

	/**
	 * Determine if an item exists in the cache.
	 */
	has(key: K): boolean;

	/**
	 * Determine multiple items exist in the cache.
	 */
	hasMany(keys: K[]): boolean[];

	/**
	 * Determine if an item doesn't exist in the cache.
	 */
	missing(key: K): boolean;

	/**
	 * Determine multiple items don't exist in the cache.
	 */
	missingMany(keys: K[]): boolean[];

	/**
	 * Store an item in the cache indefinitely.
	 */
	forever(key: K, value: T): boolean;

	/**
	 * Store multiple items in the cache indefinitely.
	 */
	foreverMany(values: Array<[K, T]>, value: T): boolean[];

	/**
	 * Remove an item from the cache.
	 */
	forget(key: K): boolean;

	/**
	 * Remove multiple items from the cache.
	 */
	forgetMany(keys: K[]): boolean[];

	/**
	 * Remove all items from the cache.
	 */
	flush(): boolean;

	/**
	 * Get the cache key prefix.
	 */
	getPrefix(): string;
}
