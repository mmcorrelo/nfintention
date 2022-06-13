const BASE_URL = 'https://nfintention-default-rtdb.firebaseio.com';

const handleList = async <T>(response: Response) => {
    const result: Record<string, T> = await response.json();

    return Object
        .keys(result)
        .reduce((accounts: Array<T>, id: string) => ([...accounts, { ...result[id], id }]), []);
}

const handleObject = async <T>(response: Response) => {
    const result: Record<string, T> = await response.json();

    if (result) {
        const [id] = Object.keys(result);

        return ({ ...result[id] || {}, id })
    }

    return result;
}

export default {
    BASE_URL,
    handleList,
    handleObject
}
