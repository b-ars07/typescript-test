interface IPayment {
    sum: number;
    from: number;
    to: number;
}
enum PaymentStatus {
    Success = 'success',
    Failed = 'failed',
}
interface IPaymentRequest extends IPayment { }
interface IDataSuccess extends IPayment {
    databaseId: number;
}
interface IDataFailed {
    errorMessage: string;
    errorCode: number;
}
interface IResponseSuccess {
    status: PaymentStatus.Success;
    dataResponse: IDataSuccess;
}
interface IResponseFailed {
    status: PaymentStatus.Failed;
    dataResponse: IDataFailed;
}
