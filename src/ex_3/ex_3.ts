interface PaymentData {
    form: number,
    to: number,
    sum: number
}

interface RequestPayment extends PaymentData {}

enum PaymentStatus {
    SUCCESS = 'success',
    FAILED = 'failed'
}

interface IResponse {
    status: PaymentStatus,
    data: ResponseSuccess | ResponseFailed
}

interface ResponseSuccess extends PaymentData {
    databaseId: number
}
interface ResponseFailed {
    errorMessage: string,
    errorCode: number
}

interface IResponseSuccess {
    status: PaymentStatus.SUCCESS,
    data: ResponseSuccess
}

interface IResponseFailed {
    status: PaymentStatus.FAILED,
    data: ResponseFailed
}
