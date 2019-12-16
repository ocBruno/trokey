import {getUserFromCookie, getUserFromSession} from '~/helpers'

export default function ({store, redirect}) {
  if (store.getters['modules/user/isAuthenticated']) {
    return redirect('/protected')
  }
}
