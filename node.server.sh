#!/bin/bash

# Node.js 애플리케이션 실행 파일 및 포트 설정
APP_DIR="/home/ec2-user/100DaysGame"  # 본인 프로젝트의 Node.js 앱 경로
APP_FILE="app.js"  # 실행할 Node.js 파일
NODE_EXEC="node"  # Node.js 실행 명령어
PORT="3000"
LOG_FILE="node.log"
PID_FILE="node.pid"

# 명령어에 따른 실행
case "$1" in
    start)
        # 실행 중인지 확인
        if [ -f "$PID_FILE" ] && kill -0 $(cat "$PID_FILE") 2>/dev/null; then
            echo "Node.js 서버가 이미 실행 중입니다. (PID: $(cat $PID_FILE))"
            exit 1
        fi

        echo "Node.js 서버 시작 중..."
        cd "$APP_DIR" || { echo "디렉토리를 찾을 수 없습니다: $APP_DIR"; exit 1; }
        nohup $NODE_EXEC "$APP_FILE" > "$LOG_FILE" 2>&1 &
        echo $! > "$PID_FILE"
        echo "Node.js 서버가 시작되었습니다. (PID: $(cat $PID_FILE))"
        ;;

    stop)
        # 실행 중인지 확인하고 종료
        if [ -f "$PID_FILE" ] && kill -0 $(cat "$PID_FILE") 2>/dev/null; then
            echo "Node.js 서버 종료 중... (PID: $(cat $PID_FILE))"
            kill $(cat "$PID_FILE")
            rm "$PID_FILE"
            echo "Node.js 서버가 종료되었습니다."
        else
            echo "실행 중인 Node.js 서버를 찾을 수 없습니다."
        fi
        ;;

    restart)
        $0 stop
        sleep 2
        $0 start
        ;;

    status)
        if [ -f "$PID_FILE" ] && kill -0 $(cat "$PID_FILE") 2>/dev/null; then
            echo "✅ Node.js 서버가 실행 중입니다. (PID: $(cat $PID_FILE))"
        else
            echo "❌ Node.js 서버가 실행 중이지 않습니다."
        fi
        ;;

    *)
        echo "사용법: $0 {start|stop|restart|status}"
        exit 1
        ;;
esac
