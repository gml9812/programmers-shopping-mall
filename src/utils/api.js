const API_END_POINT = 'https://uikt6pohhh.execute-api.ap-northeast-2.amazonaws.com/dev/products';

export const requests = async (productId) => {
  try {
    const endPoint = productId === undefined ? API_END_POINT : `${API_END_POINT}/${productId}`;
    const res = await fetch(endPoint);

    if (!res.ok) {
      throw new Error('서버의 상태가 이상합니다');
    }

    return await res.json();
  } catch (e) {
    throw new Error(`에러가 발생했습니다. ${e.message}`);
  }
}
