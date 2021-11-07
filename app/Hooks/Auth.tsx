import React, {
  createContext,
  useCallback,
  useState,
  useContext,
} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../Services/api';

interface IUser {
  id: string
  investor_name: string
  email: string
  city: string
  country: string,
  balance: number,
  portfolio: {
    enterprises_number: 0,
    enterprises: []
  },
  portfolio_value: 1000000.0,
}

interface IAuthState {
  token: string;
  client: IUser;
  uid: string
}

interface ISignInCredentials {
  email: string;
  password: string;
}

interface IAuthContextData {
  client: IUser
  token: string
  uid: string
  signIn(credentials: ISignInCredentials): Promise<void>;
  signOut(): void;
  loading: boolean;
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [dataHeaders, setDataHeaders] = useState<IAuthState>({} as IAuthState);

  // ---- LOADSTORAGE -> ARMAZENA E LEMBRA SE O USUÁRIO FEZ LOGIN E EVITA FAZER NOVAMENTE ----
/*   useEffect(() => {
    async function loadStorageDate(): Promise<void> {
      const [token, client, uid] = await AsyncStorage.multiGet([
        '@ioasysEmpresas:access-token',
        '@ioasysEmpresas:client',
        '@ioasysEmpresas:uid',
      ]);

      if (token[1] && client[1] && uid[1]) {
        // Inserindo e definindo o token para todas as requisições.
        api.defaults.headers.authorization = `Bearer ${token[1]}`;

        setDataHeaders({ token: token[1], client: JSON.parse(client[1]), uid: uid[1] });
      }
      setLoading(false);
    }
    loadStorageDate();
  }); */

  const signIn = useCallback(async ({ email, password }) => {

    const response = await api.post('users/auth/sign_in', {
      email: email,
      password: password,
    });

    const { 'access-token': token, client, uid } = response.headers;

    await AsyncStorage.multiSet([
      ['@ioasysEmpresas:access-token', token],
      ['@ioasysEmpresas:client', client],
      ['@ioasysEmpresas:uid', uid],
    ]);

    api.defaults.headers.authorization = `Bearer ${token}`;

    setDataHeaders({ token, client, uid });
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove([
      '@ioasysEmpresas:access-token', 
      '@ioasysEmpresas:client',
      '@ioasysEmpresas:uid'      
    ]);

    setDataHeaders({} as IAuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{ 
        client: dataHeaders.client, 
        token: dataHeaders.token, 
        uid: dataHeaders.uid, 
        signIn, 
        loading, 
        signOut 
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): IAuthContextData {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth }