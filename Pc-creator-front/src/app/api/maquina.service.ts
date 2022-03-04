import { Injectable } from '@angular/core';
import Axios, { AxiosInstance } from 'axios';
import { Maquina } from '../models/maquina';
import { Resposta } from '../models/resposta';

@Injectable({
  providedIn: 'root'
})
export class MaquinaService {


  private axiosInstance: AxiosInstance

  constructor() {
    this.axiosInstance = Axios.create(
      {
        baseURL: 'http://127.0.0.1:3000/maquina'
      }
    )
  }
  async getAll(): Promise<Resposta<Maquina[]>> {
    const resultAxios = await this.axiosInstance.get('/getall')
    return resultAxios.data
  }

  async insert(maquina: Maquina): Promise<Resposta<Maquina>> {
    const resultAxios = await this.axiosInstance.post('/insert', maquina)
    return resultAxios.data
  }

  async getById(id: number): Promise<Resposta<Maquina>> {
    const resultAxios = await this.axiosInstance.get('/getbyid/' + id)
    return resultAxios.data
  }
  async getAllMaquinas(id:number): Promise<Resposta<Maquina[]>> {
    const resultAxios = await this.axiosInstance.get('/getallmaquinas/' + id)
    return resultAxios.data
  }

  async update(maquina: Maquina): Promise<Resposta<Maquina>> {
    const resultAxios = await this.axiosInstance.put('/update', maquina)
    return resultAxios.data
  }

  async delete(id: number) {
    const resultAxios = await this.axiosInstance.put('/delete/' + id)
    return resultAxios.data
  }
}
