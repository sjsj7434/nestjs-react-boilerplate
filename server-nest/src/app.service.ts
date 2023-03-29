import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {
	constructor(private readonly httpService: HttpService) { }
	getHello(): string {
		return 'Hello World! This is Template';
	}

	async getAPI(): Promise<any> {
		const serverName = '루페온';
		const apiUrl = `https://developer-lostark.game.onstove.com/guilds/rankings?serverName=${encodeURIComponent(serverName)}`;
		const encodeToken = "dLCJhbGcidOiJT1A5NWpjyCI6T5Tl";
		const headersRequest = {
			'Content-Type': 'application/json', // As Far As I Know, this one is not needed
			'Authorization': `bearer ${encodeToken}`,
		};

		const { data } = await firstValueFrom(
			this.httpService.get<any>(apiUrl, { headers: headersRequest }).pipe(
				catchError((error: AxiosError) => {
					console.error(error.response.data);
					throw 'An error happened!';
				}),
			),
		);

		return data;
	}
}