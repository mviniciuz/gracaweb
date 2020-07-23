export function signInRequest(document, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { document, password },
  };
}

export function signInSuccess(token, user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, user },
  };
}

export function signUpRequest(name, document, password) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: { name, document, password },
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}
