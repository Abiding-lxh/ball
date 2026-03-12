from django.http import JsonResponse
from django.contrib.auth import login
from django.contrib.auth.models import User
from game.models.player.player import Player


def register(request):
	data=request.GET;
	username=data.get("username","").strip()
	password=data.get("password","").strip()
	password_confirm=data.get("password_confirm","").strip()
	if not username or not password:
		return JsonResponse({
			'result':"用户名或密码不能为空"
			})
	if password!=password_confirm:
		return JsonResponse({
			'result':"两个密码不一致"
			})
	if User.objects.filter(username=username).exists():
		return JsonResponse({
			'result':"用户名已存在"
			})
	user=User(username=username)
	user.set_password(password)
	user.save()
	Player.objects.create(user=user,photo="https://q2.itc.cn/q_70/images03/20250225/e8117dd40aae4db5a64461f1ea0d16fc.jpeg")
	login(request,user)
	return JsonResponse({
		'result':"success"
		})