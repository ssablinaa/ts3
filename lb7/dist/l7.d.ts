interface Transport {
    ownerLastName: string;
    ownerDocumentNumber: string;
}
declare class TransportStorage {
    transports: Transport[];
    constructor(transports: Transport[]);
    findByDocumentNumberPrefix(prefix: string): Transport[];
    sortByOwner(): Transport[];
    getAll(): Transport[];
}
declare const transports: Transport[];
declare const transportStorage: TransportStorage;
declare const filteredTransports: Transport[];
