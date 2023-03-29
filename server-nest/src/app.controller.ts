import { Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}

	@Get('api/users')
	getHello(): string {
		return this.appService.getHello();
	}

	@Post('image')
	@UseInterceptors(FileInterceptor('file'))
	uploadFile(@UploadedFile() file) {
		console.log('uploadFile', file);
		return { "url": "https://img.megastudy.net/campus/library/v2015/library/intro_renew/main_top_banner_teamplay_gate_221216.jpg" };
	}
}