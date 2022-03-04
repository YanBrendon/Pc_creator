import { Injectable } from '@angular/core';
import Axios, { AxiosInstance } from 'axios';
import { MemoriaRam } from '../models/memoria-ram';
import { Resposta } from '../models/resposta';

@Injectable({
  providedIn: 'root'
})
export class MemoriaRamService {

  private axiosInstance: AxiosInstance

  constructor() {
    this.axiosInstance = Axios.create(
      {
        baseURL: 'http://127.0.0.1:3000/memoria-ram'
      }
    )
  }

  async getAll(): Promise<Resposta<MemoriaRam[]>> {
    const resultAxios = await this.axiosInstance.get('/getall')
    return resultAxios.data
  }
  async getById(id:number):Promise<Resposta<MemoriaRam>>{

    const resultAxios = await this.axiosInstance.get('/getbyid/' + id)
    return resultAxios.data

  }
}
