from django.shortcuts import render,redirect
from django.core.mail import send_mail
from django.http import HttpResponse, JsonResponse

# Create your views here.\

def index(request):
    context = {}
    return render(request, 'portfolio/index.html',context)

def index2(request):
    context = {}
    return render(request, 'portfolio/oldindex.html',context)

def resume(request):
    context = {}
    return render(request, 'portfolio/resume.html',context)
def contact(request):
    context = {}
    return render(request, 'portfolio/contact.html',context)
def sendMessage(request):
    context = {}

    id_subject = request.GET['id_subject']
    id_sender = request.GET['id_sender']
    id_message = request.GET['id_message']
    send_mail(
        id_subject,
        'Sender: '+id_sender+' Message: '+id_message,
        'neal@nealmick.com',
        ['nealmick99@gmail.com'],
        fail_silently=False,
    )
    print(id_subject,id_sender,id_message)
    return JsonResponse({'asdf': 'message sent'})
