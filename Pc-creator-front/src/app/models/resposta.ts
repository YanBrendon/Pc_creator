export class Resposta<TData>
{
    message:string = ""
    success:boolean = false
    data:TData | null = null
}