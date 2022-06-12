const BASE_URL = 'https://nfintention-default-rtdb.firebaseio.com';

const convertListResponse = async <T>(response: Response) => {
    const result: Record<string, T> = await response.json();

    return Object
        .keys(result)
        .reduce((accounts: Array<T>, id: string) => ([...accounts, { ...result[id], id }]), []);
}

const convertSingleResponse = async <T>(response: Response) => {
    const result: Record<string, T> = await response.json();

    if (result) {
        const [id] = Object.keys(result);

        return ({ ...result[id], id })
    }

    return result;
}

const convertToId = async (response: Response) => {
    const result: Record<string, string> = await response.json();

    if (result) {
        const { name } = result;

        return ({ id: name })
    }

    return result;
}

export default {
    BASE_URL,
    convertList: convertListResponse,
    convert: convertSingleResponse,
    convertToId,
}
