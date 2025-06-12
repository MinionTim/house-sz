# 在项目根目录下执行
myselfpath=$(cd `dirname $0`; pwd)
echo execute deployer file path: $myselfpath

cd $myselfpath

# -u 远程文件有更新，则不覆盖
rsync -avzu \
  --exclude=venv/ \
  --exclude=logs/ \
  --exclude=__pycache__/ \
  --exclude=.vscode \
  --exclude=.idea/ \
  --exclude=.git/ \
  --exclude=.venv/ \
  --exclude=.DS_Store \
  --exclude=deployer.sh \
  $myselfpath/docs/.vitepress/dist/ villey.cn:/root/work/house-sz/public
