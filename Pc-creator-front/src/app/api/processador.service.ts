import { Injectable } from '@angular/core';
import Axios, { AxiosInstance } from 'axios';
import { Processador } from '../models/processador';
import { Resposta } from '../models/resposta';

@Injectable({
  providedIn: 'root'
})
export class ProcessadorService {

  private axiosInstance: AxiosInstance

  constructor() {
    this.axiosInstance = Axios.create(
      {
        baseURL: 'http://127.0.0.1:3000/processador'
      }
    )
  }

  async getAll(): Promise<Resposta<Processador[]>> {
    const resultAxios = await this.axiosInstance.get('/getall')
    return resultAxios.data
  }
  async getById(id:number):Promise<Resposta<Processador>>{

    const resultAxios = await this.axiosInstance.get('/getbyid/' + id)
    return resultAxios.data
  }

}

