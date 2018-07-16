FROM openjdk:8

RUN apt-get update && \
    apt-get install -y net-tools && \
    apt-get -s clean

COPY target/heimdall-conf*.jar /

CMD exec java -jar /heimdall-conf*.jar
