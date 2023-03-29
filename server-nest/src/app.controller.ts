import { Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { extname } from 'path';

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}

	@Get('hello')
	getHello(): Object {
		console.log('[server console] getHello');
		return { "message": this.appService.getHello() };
	}

	@Get('api')
	async getAPI(): Promise<Object> {
		console.log('[server console] getAPI');
		const result = await this.appService.getAPI();
		return { "message": result };
	}

	@Post('image')
	@UseInterceptors(FileInterceptor('upload'))
	uploadFile(@UploadedFile() file: Express.Multer.File): Object {
		//Multer is --save-dev option installed
		const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('');
		console.log('[server console] uploadFile', randomName, extname(file.originalname));
		console.log(file);
		return { "url": "https://docs.nestjs.com/assets/logo-small.svg" };
	}
}