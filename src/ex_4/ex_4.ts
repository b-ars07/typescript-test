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
    data: IDataSuccess;
}
interface IResponseFailed {
    status: PaymentStatus.Failed;
    data: IDataFailed;
}

type Res = IResponseSuccess | IResponseFailed

function isDatabaseId(res: Res): res is IResponseSuccess {
    return 'databaseId' in res
}

function isSuccessPayment(res: Res): number {
    if (isDatabaseId(res)) {
        return res.data.databaseId
    } else {
        throw new Error(res.data.errorMessage)
    }
}


