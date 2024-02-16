export interface CreateFileinvoiceRequest {
	idZone:        number;
	dateInvoice:   string;
	fileName:      string;
	fileExtension: string;
	fileBase64:    string;
}
