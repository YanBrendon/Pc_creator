import { Injectable } from '@angular/core';
import Axios, { AxiosInstance } from 'axios';
import { Armazenamento } from '../models/armazenamentos';
import { Resposta } from '../models/resposta';

@Injectable({
  providedIn: 'root'
})
export class ArmazenamentoService {

  private axiosInstance: AxiosInstance

  constructor() {
    this.axiosInstance = Axios.create(
      {
        baseURL: 'http://127.0.0.1:3000/armazenamento'
      }
    )
  }

  async getAll(): Promise<Resposta<Armazenamento[]>> {
    const resultAxios = await this.axiosInstance.get('/getall')
    return resultAxios.data
  }

  async getById(id:number):Promise<Resposta<Armazenamento>>{

    const resultAxios = await this.axiosInstance.get('/getbyid/' + id)
    return resultAxios.data

  }

}