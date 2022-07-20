import qrcode
# example data
data = "s=TD;e=2022ilpe;l=qm;m=2;r=b2;t=23383;as=[20];at=Y;au=6;al=34;ac=Y;tu=2;tl=2;wd=Y;wbt=N;cif=g;ss=[44];c=a;be=Y;cn=3;ds=x;dr=x;hc=N;sd=N;sr=3;d=N;all=N;co=;cnf=a"
# output file name
filename = "site.png"
# generate qr code
img = qrcode.make(data)
# save img to a file
img.save(filename)
