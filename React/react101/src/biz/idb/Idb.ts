export class BookmarkDb {
  dbName: string;


  constructor(dbName: string) {
    this.dbName = dbName;

    if (!this.isIndexedDBReady()) {
      return;
    }

    // 第一次打开数据库, 就得去新建表. IndexedDB中表叫做ObjectStore
    // 新建表的操作是在onupgradeneeded里的


  }

  isIndexedDBReady() {
    return "indexedDB" in window;
  }

}
