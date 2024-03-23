// task1
// Класс Хранилища Транспортных средств
class TransportStorage {
    constructor(transports) {
        this.transports = transports;
    }
    findByDocumentNumberPrefix(prefix) {
        return this.transports.filter(transport => transport.ownerDocumentNumber.startsWith(prefix));
    }
    sortByOwner() {
        return this.transports.sort((a, b) => a.ownerLastName.localeCompare(b.ownerLastName));
    }
    getAll() {
        return this.transports;
    }
}
// Пример использования
const transports = [
    { ownerLastName: "Лебедев", ownerDocumentNumber: "1234567890" },
    { ownerLastName: "Володин", ownerDocumentNumber: "2345678901" },
    { ownerLastName: "Алешин", ownerDocumentNumber: "3456789012" }
];
const transportStorage = new TransportStorage(transports);
transportStorage.sortByOwner();
console.log(transportStorage.getAll());
// task2
const filteredTransports = transportStorage.findByDocumentNumberPrefix("234");
console.log(filteredTransports);
