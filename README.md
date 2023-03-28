<html>
	<body>
		<div>
			<div>
				<div style="text-align: center;">
					<h2>
						Nest.js와 React를 이용한 웹 사이트 빠른 시작 (Nest.js & React, Boilerplate)
					</h2>
				</div>
				<div style="text-align: left;">
					<p>
						Nest 서버는 build된 React index.html 파일 참조
					</p>
<pre><code>//Nest.js app.module.ts 파일
@Module({
	imports: [
		ServeStaticModule.forRoot({
			rootPath: join(__dirname, '../..', 'client-react/build'), //Nest 서버는 build된 React index.html 파일 참조
		}),
	],
	controllers: [UsersController],
	providers: [],
})
export class AppModule {}</code></pre>
					<p>
						매번 React를 build하지 않고, 개발할 때에는 2개의 서버를 모두 가동 시켜서 확인하면 됨
					</p>
					<p>
						React에 Proxy는 개발 환경일 때에만 작동하기 때문에 설정하지 않음
					</p>
					<p>
						Nest.js의 main.ts에 CORS를 활성화하는 코드가 있어 다른 도메인에서 API를 호출할 수 있음
					</p>
				</div>
				<br>
				<div style="text-align: left;">
					<h3>사용한 프레임워크</h3>
					<ul>
						<li><b>Back-end</b> : Nest.js</li>
						<li><b>Front-end</b> : React(Typescript)</li>
						<li><b>CSS</b> : Bootstrap</li>
					</ul>
				</div>
				<div style="text-align: left;">
					<h3>프로젝트 설치 명령어</h3>
					<ol>
						<li><b>[client-react & server-nest]</b> npm install</li>
						<li><b>[client-react]</b> npm run build</li>
						<li><b>[client-react]</b> npm run start</li>
						<li><b>[server-nest]</b> npm run start:dev</li>
					</ol>
				</div>
			</div>
		</div>
	</body>
</html>