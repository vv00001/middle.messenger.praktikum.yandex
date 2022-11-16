import {HTTPTransport} from "../../mypracticum/HTTPTransport"

export default abstract class MainClass {
  protected https: HTTPTransport;

  protected constructor(point: string) {
    console.log(point);
    // console.log(https);
    this.https = new HTTPTransport(point);
  }
  
  public abstract create?(data: unknown): Promise<unknown>;

  public abstract read?(identifier?: string): Promise<unknown>;

  public abstract update?(identifier: string, data: unknown): Promise<unknown>;

  public abstract delete?(identifier: string): Promise<unknown>;
}