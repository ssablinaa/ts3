// task1

interface Transport {
    ownerLastName: string;
    ownerDocumentNumber: string;
}

// Класс Хранилища Транспортных средств
class TransportStorage {
    transports: Transport[];

    constructor(transports: Transport[]) {
        this.transports = transports;
    }
    findByDocumentNumberPrefix(prefix: string): Transport[] {
        return this.transports.filter(transport => transport.ownerDocumentNumber.startsWith(prefix));
    }

    sortByOwner(): Transport[] {
        return this.transports.sort((a, b) => a.ownerLastName.localeCompare(b.ownerLastName));
    }

   
    getAll(): Transport[] {
        return this.transports;
    }
}

// Пример использования
const transports: Transport[] = [
    { ownerLastName: "Лебедев" ,ownerDocumentNumber: "1234567890"},
    { ownerLastName: "Володин" ,ownerDocumentNumber: "2345678901"},
    { ownerLastName: "Алешин",ownerDocumentNumber: "3456789012" }
];

const transportStorage = new TransportStorage(transports);
transportStorage.sortByOwner();

console.log(transportStorage.getAll());

// task2
const filteredTransports = transportStorage.findByDocumentNumberPrefix("234");

console.log(filteredTransports);
