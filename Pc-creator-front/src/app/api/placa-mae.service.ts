import { Injectable } from '@angular/core';
import Axios, { AxiosInstance } from 'axios';
import { PlacaMae } from '../models/placa-mae';
import { Resposta } from '../models/resposta';

@Injectable({
  providedIn: 'root'
})
export class PlacaMaeService {

  private axiosInstance: AxiosInstance

  constructor() {
    this.axiosInstance = Axios.create(
      {
        baseURL: 'http://127.0.0.1:3000/placa-mae'
      }
    )
  }

  async getAll(): Promise<Resposta<PlacaMae[]>> {
    const resultAxios = await this.axiosInstance.get('/getall')
    return resultAxios.data
  }

  async getById(id:number):Promise<Resposta<PlacaMae>>{

    const resultAxios = await this.axiosInstance.get('/getbyid/' + id)
    return resultAxios.data

  }
}
