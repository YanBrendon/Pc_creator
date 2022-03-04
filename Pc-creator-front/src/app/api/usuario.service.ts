import { Injectable } from '@angular/core';
import Axios, { AxiosInstance } from 'axios';
import { Resposta } from '../models/resposta';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  private axiosInstance: AxiosInstance

  constructor() {
    this.axiosInstance = Axios.create(
      {
        baseURL: 'http://127.0.0.1:3000/usuario'
      }
    )
  }



  async validarLogin(email: string, senha: string): Promise<Resposta<Usuario>> {
    const login = {
      email,
      senha
    }
    const resultAxios = await this.axiosInstance.post('/validarlogin', login)
    return resultAxios.data
  }

  async getById(id: number): Promise<Resposta<Usuario>> {
    const resultAxios = await this.axiosInstance.get('/getbyid/' + id)
    return resultAxios.data
  }


  async insert(usuario: Usuario): Promise<Resposta<Usuario>> {
    const resultAxios = await this.axiosInstance.post('/insert', usuario)
    return resultAxios.data
  }
}
