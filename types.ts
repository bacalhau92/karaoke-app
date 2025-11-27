
export interface Song {
  title: string;
  artist: string;
}

export interface UserInfo {
  name: string;
  table: string;
}

export interface SongRequest extends UserInfo {
  id?: string; /* Adicionado para o Firebase ID */
  song: Song;
  dedication?: string;
  timestamp: number;
  status?: 'pending' | 'playing' | 'completed';
}

export interface SystemSettings {
  adminWhatsapp: string;
  openingHours: string;
  popularSongs: Song[];
  isSessionActive: boolean; /* Novo campo para controle global da sessão */
}

export enum Screen {
  SPLASH,
  HOME,
  IDENTIFICATION,
  REQUEST_FORM,
  MY_REQUESTS,
  INFO,
  CONFIRMATION,
  SUCCESS,
  ADMIN_LOGIN,
  ADMIN_DASHBOARD
}
